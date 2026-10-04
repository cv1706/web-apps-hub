export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Proxy endpoint for ToEstate MCP
    if (url.pathname === '/api/toestate-mcp') {
      // Handle CORS Preflight
      if (request.method === 'OPTIONS') {
        return new Response(null, {
          status: 204,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Accept, Authorization',
            'Access-Control-Max-Age': '86400',
          },
        });
      }

      if (request.method !== 'POST') {
        return new Response(JSON.stringify({ error: 'Only POST supported for MCP proxy' }), {
          status: 405,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      }

      try {
        const body = await request.text();
        const mcpResponse = await fetch('https://toestate.tw/mcp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json, text/event-stream',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) WebAppsHub/1.0'
          },
          body: body
        });

        const respText = await mcpResponse.text();

        return new Response(respText, {
          status: mcpResponse.status,
          headers: {
            'Content-Type': mcpResponse.headers.get('Content-Type') || 'text/event-stream; charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Accept, Authorization',
            'Cache-Control': 'no-cache, no-store, must-revalidate'
          }
        });
      } catch (err) {
        return new Response(JSON.stringify({ error: 'MCP Proxy Failed', message: err.message }), {
          status: 502,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      }
    }

    // Default: serve static assets
    return env.ASSETS.fetch(request);
  }
};
