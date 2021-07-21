// @ts-check
const { app, Notification } = require('electron');

/**
 * @param {string} key
 * @return {string}
 */
const processArg = (key) => {
  const base = process.argv.filter((arg) => arg.startsWith(`--${key}`))[0] || '';
  return base.split('=')[1];
};

/**
 * @param {Notification} notification
 * @param {boolean} isError
 * @param {boolean} autoClose
 * @return {NodeJS.Timeout}
 */
const close = (notification, isError, autoClose) => {
  if (isError) {
    return setTimeout(
      () => {
        notification.close();
        app.quit();
      },
      autoClose ? 0 : 10000,
    );
  }
  return setTimeout(() => { }, 0);
};

const showNotification = () => {
  const title = processArg('title');
  const autoClose = processArg('auto-close');
  const subtitle = processArg('subtitle');
  const body = processArg('body');
  const error = processArg('error');
  const isError = !!error && error.length > 0;
  const messageBody = isError ? error : body;

  const notification = new Notification({
    title,
    body: messageBody,
    subtitle,
    silent: !isError,
  });

  notification.show();
  const timeout = close(notification, isError, autoClose === 'true');

  notification.on('close', () => {
    clearTimeout(timeout);
    app.quit();
  });
};

app.dock.hide();
app.whenReady().then(showNotification);
