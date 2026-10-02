/**
 * Crane Lifting Calculator
 * 吊車作業計算工具 — 核心邏輯
 *
 * 公式來源：
 *   最大吊重 = (噸數 x 3 / 半徑) x 折減係數
 *   作業半徑 = 噸數 x 3 / 吊重
 *
 * 適用條件：50 噸以下小型吊車，支腿跨距約 6.2 公尺
 */

(function () {
  'use strict';

  // ===== DOM References =====
  const modeWeightBtn = document.getElementById('mode-weight-btn');
  const modeRadiusBtn = document.getElementById('mode-radius-btn');
  const inputTonnage = document.getElementById('input-tonnage');
  const inputRadius = document.getElementById('input-radius');
  const inputWeight = document.getElementById('input-weight');
  const inputRadiusGroup = document.getElementById('input-radius-group');
  const inputWeightGroup = document.getElementById('input-weight-group');
  const safetySlider = document.getElementById('safety-factor');
  const safetyValue = document.getElementById('safety-value');
  const calcBtn = document.getElementById('calc-btn');
  const resultPlaceholder = document.getElementById('result-placeholder');
  const resultContent = document.getElementById('result-content');
  const resultBadge = document.getElementById('result-badge');
  const resultLabel = document.getElementById('result-label');
  const resultValue = document.getElementById('result-value');
  const resultUnit = document.getElementById('result-unit');
  const detailFormula = document.getElementById('detail-formula');
  const detailTheoretical = document.getElementById('detail-theoretical');
  const detailFactor = document.getElementById('detail-factor');
  const detailMoment = document.getElementById('detail-moment');
  const warningBox = document.getElementById('warning-box');
  const warningText = document.getElementById('warning-text');
  const infoToggle = document.getElementById('info-toggle');
  const safetyFactorGroup = document.querySelector('.safety-factor-group');

  let currentMode = 'weight'; // 'weight' | 'radius'

  // ===== Mode Switching =====
  function setMode(mode) {
    currentMode = mode;

    // Update buttons
    modeWeightBtn.classList.toggle('active', mode === 'weight');
    modeRadiusBtn.classList.toggle('active', mode === 'radius');

    // Toggle input fields
    if (mode === 'weight') {
      inputRadiusGroup.classList.remove('hidden');
      inputWeightGroup.classList.add('hidden');
      safetyFactorGroup.style.display = '';
      inputWeight.value = '';
    } else {
      inputRadiusGroup.classList.add('hidden');
      inputWeightGroup.classList.remove('hidden');
      safetyFactorGroup.style.display = 'none';
      inputRadius.value = '';
    }

    // Reset result
    hideResult();
    validateInputs();
  }

  modeWeightBtn.addEventListener('click', () => setMode('weight'));
  modeRadiusBtn.addEventListener('click', () => setMode('radius'));

  // ===== Safety Slider =====
  safetySlider.addEventListener('input', () => {
    safetyValue.textContent = safetySlider.value + '%';
    if (!resultContent.classList.contains('hidden')) {
      calculate();
    }
  });

  // ===== Input Validation =====
  function validateInputs() {
    let valid = false;
    const tonnage = parseFloat(inputTonnage.value);

    if (currentMode === 'weight') {
      const radius = parseFloat(inputRadius.value);
      valid = tonnage > 0 && radius > 0;
    } else {
      const weight = parseFloat(inputWeight.value);
      valid = tonnage > 0 && weight > 0;
    }

    calcBtn.disabled = !valid;
  }

  inputTonnage.addEventListener('input', validateInputs);
  inputRadius.addEventListener('input', validateInputs);
  inputWeight.addEventListener('input', validateInputs);

  // ===== Calculation =====
  function calculate() {
    const tonnage = parseFloat(inputTonnage.value);
    const factor = parseInt(safetySlider.value) / 100;
    const moment = tonnage * 3;

    if (currentMode === 'weight') {
      const radius = parseFloat(inputRadius.value);
      const theoretical = moment / radius;
      const actual = theoretical * factor;

      showResult({
        badge: '最大吊重估算',
        label: '最大吊重',
        value: actual.toFixed(2),
        unit: '噸',
        formula: `(${tonnage} x 3 / ${radius}) x ${safetySlider.value}%`,
        theoretical: theoretical.toFixed(2) + ' 噸',
        factor: safetySlider.value + '%',
        moment: moment + ' 噸-公尺',
        warning: getWeightWarning(tonnage, actual, radius),
      });
    } else {
      const weight = parseFloat(inputWeight.value);
      const maxRadius = moment / weight;

      showResult({
        badge: '作業半徑估算',
        label: '最大作業半徑',
        value: maxRadius.toFixed(2),
        unit: '公尺',
        formula: `${tonnage} x 3 / ${weight}`,
        theoretical: maxRadius.toFixed(2) + ' 公尺',
        factor: '未套用（半徑模式）',
        moment: moment + ' 噸-公尺',
        warning: getRadiusWarning(tonnage, weight, maxRadius),
      });
    }
  }

  function getWeightWarning(tonnage, weight, radius) {
    if (tonnage > 50) {
      return { type: 'danger', text: '本公式僅適用於 50 噸以下吊車，結果可能不準確。' };
    }
    if (weight < 0.5) {
      return { type: 'warning', text: '計算吊重極低，請確認輸入參數是否正確。' };
    }
    return { type: 'warning', text: '本計算僅供初步估算，實際作業需依吊車原廠性能表操作，並考量大臂長度與配重箱配置。' };
  }

  function getRadiusWarning(tonnage, weight, radius) {
    if (tonnage > 50) {
      return { type: 'danger', text: '本公式僅適用於 50 噸以下吊車，結果可能不準確。' };
    }
    if (weight > tonnage) {
      return { type: 'danger', text: '吊裝重量超過吊車額定噸數，存在安全風險。' };
    }
    if (radius < 2) {
      return { type: 'warning', text: '計算半徑極短，請確認吊車實際大臂最短跨距。' };
    }
    return { type: 'warning', text: '此為理論最大半徑（未扣除大臂與吊鉤重量），實際可用半徑會更短。' };
  }

  function showResult(data) {
    resultPlaceholder.classList.add('hidden');
    resultContent.classList.remove('hidden');

    // Force re-animation
    resultContent.style.animation = 'none';
    void resultContent.offsetHeight;
    resultContent.style.animation = '';

    resultBadge.textContent = data.badge;
    resultLabel.textContent = data.label;
    resultUnit.textContent = data.unit;

    // Animate value
    animateValue(resultValue, parseFloat(data.value), 600);

    detailFormula.textContent = data.formula;
    detailTheoretical.textContent = data.theoretical;
    detailFactor.textContent = data.factor;
    detailMoment.textContent = data.moment;

    warningBox.className = 'warning-box' + (data.warning.type === 'danger' ? ' danger' : '');
    warningText.textContent = data.warning.text;
  }

  function hideResult() {
    resultPlaceholder.classList.remove('hidden');
    resultContent.classList.add('hidden');
  }

  // ===== Value Animation =====
  function animateValue(el, target, duration) {
    const start = performance.now();
    const from = 0;

    function step(timestamp) {
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = from + (target - from) * eased;
      el.textContent = current.toFixed(2);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }

  // ===== Calculate Button =====
  calcBtn.addEventListener('click', calculate);

  // Enter key to calculate
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !calcBtn.disabled) {
      calculate();
    }
  });

  // ===== Info Panel Toggle =====
  const infoPanel = document.querySelector('.info-panel');
  infoToggle.addEventListener('click', () => {
    infoPanel.classList.toggle('open');
  });

  // ===== Init =====
  setMode('weight');
})();
