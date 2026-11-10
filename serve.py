#!/usr/bin/env python3
# Lokalny serwer z własną stroną błędu (errors/error.html) dla 404 i 502.
# Uruchom: python3 serve.py   (zamiast python3 -m http.server 5500)

import http.server
import os

PORT = 5500
ROOT = os.path.dirname(os.path.abspath(__file__))
ERROR_PAGE = os.path.join(ROOT, 'errors', 'error.html')


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def send_error(self, code, message=None, explain=None):
        # Przy 404 i 502 pokaż własną stronę zamiast domyślnego komunikatu Pythona.
        if code in (404, 502) and os.path.exists(ERROR_PAGE):
            with open(ERROR_PAGE, 'rb') as f:
                body = f.read()
            self.send_response(code)
            self.send_header('Content-Type', 'text/html; charset=utf-8')
            self.send_header('Content-Length', str(len(body)))
            self.end_headers()
            self.wfile.write(body)
            return
        super().send_error(code, message, explain)


http.server.HTTPServer(('0.0.0.0', PORT), Handler).serve_forever()
