import chalk from 'chalk';
import log from '@zppack/log';

const plugin = (ctx) => {
  const { options, pluginConfig } = ctx;
  log.d('Zp Intro Plugin: plugin config = \n', chalk.gray(JSON.stringify(pluginConfig)));
  const { list, prefix = '{', suffix = '}'} = pluginConfig;
  const templateRegEx = new RegExp(`${prefix}\\s*(.*?)\\s*${suffix}`, 'g');
  const templateData = {
    ...options,
    'zp-tab': '\t',
    'zp-newline': '\n',
    'zp-space': ' ',
  };
  log.d('Zp Intro Plugin: template data = \n', chalk.gray(JSON.stringify(templateData)));

  const replaceText = text => text.replace(templateRegEx, (_, $1) => templateData[$1] ?? '');
  const chalkFactory = arr => arr.reduce((c, r) => c[r], chalk);

  if (list && list.length > 0) {
    const strs = list.map((item) => {
      const { text, texts } = item;
      if (text) {
        return chalkFactory(item.chalk ?? [])(replaceText(text));
      }
      if (texts) {
        return texts.map((elem) => chalkFactory(elem.chalk ?? [])(replaceText(elem.text))).join('');
      }
      return '';
    });

    strs.forEach((str) => {
      console.log(str);
    });
  }
};

export default plugin;
