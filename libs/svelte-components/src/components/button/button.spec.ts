import Button from './Button.svelte'
import { render } from '@testing-library/svelte'

it('it works', async () => {
  const { getByText } = render(Button)

  expect(getByText('Hello component!'));
})
