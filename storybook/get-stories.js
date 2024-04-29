/* eslint-disable global-require */
export default function getStories() {
  return [
    require('../src/components/Button/button.stories'),
    require('../src/components/Radio/radio.stories'),
    require('../src/components/Typography/typography.stories'),
  ];
}
