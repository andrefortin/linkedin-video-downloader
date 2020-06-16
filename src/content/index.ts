import Page from './Page';
import { init, configureScope } from '@sentry/browser';

if (process.env.SENTRY_DSN) {
  init({
    dsn: process.env.SENTRY_DSN,
    release: `linkedin-video-downloader-ext@${process.env.npm_package_version}`,
  });
  configureScope((scope) => {
    scope.setTag('app', 'content');
  });
}

new Page();
