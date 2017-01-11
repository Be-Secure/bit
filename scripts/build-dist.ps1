$ErrorActionPreference = 'Stop'
npm pack
if (Test-Path distribution/windows) {
  rm distribution/windows -Recurse
}
mkdir distribution/windows
mv bit-*.tgz distribution/windows/pack.tgz

cd distribution/windows
tar -xzf pack.tgz --strip 1
rm pack.tgz
npm install
npm run build
rm -r node_modules
npm install --production
mv scripts/windows/bit.cmd bin/
./scripts/build-windows-installer.bat

