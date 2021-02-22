rm -rf build/
mkdir -p build/

npx mdx-deck build ./shriek/deck.mdx
mv ./public ./build
