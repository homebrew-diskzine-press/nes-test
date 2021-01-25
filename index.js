
const { cc65, ca65, ld65 } = require('@homebrew-diskzine-press/cc65-node');

(async () => {

  await cc65({
    optimizer: {enable: true},
    target: 'nes',
    outputFile: 'test.s',
  }, 'test.c');

  await ca65({
    target: 'nes',
    outputFile: 'test.o',
  }, 'test.s');

  await ld65({
    target: 'nes',
    outputFile: 'test.nes',
  }, 'test.o', 'nes.lib');

})();

