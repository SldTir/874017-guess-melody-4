import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from '../welcome-screen/welcome-screen';

it(`Render Welcome Screen`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      errorsCount={3}
      onWelcomeButtonClick={() => {}}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
