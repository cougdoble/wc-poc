import Clock from './Clock.svelte'
import { render } from '@testing-library/svelte'

it('it works', async () => {
  const { getByText } = render(Clock)

  expect(getByText('Hello component!'));
})
