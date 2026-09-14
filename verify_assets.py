import os
import imghdr
import urllib.request

files = [
    'public/rr.png',
    'public/od.png',
    'public/bsks.png',
]

urls = [
    'http://localhost:3001/rr.png',
    'http://localhost:3001/od.png',
    'http://localhost:3001/bsks.png',
]

print('file-check')
for f in files:
    print(f, os.path.getsize(f), imghdr.what(f))

print('route-check')
out = []
for url in urls:
    try:
        resp = urllib.request.urlopen(url)
        data = resp.read(16)
        out.append((url, resp.status, resp.headers.get('Content-Type'), len(data), imghdr.what(None, data)))
    except Exception as exc:
        out.append((url, 'ERR', repr(exc)))

for item in out:
    print(item)
