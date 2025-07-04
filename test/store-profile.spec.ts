import { expect, test } from '@playwright/test';

test('update profile successfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  await page.getByRole('button', { name: 'Nome restaurante' }).click();
  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click();

  await page.getByRole('textbox', { name: 'Nome' }).fill('Rocket Pizza');
  await page.getByRole('textbox', { name: 'Descrição' }).fill('Descrição');

  await page.getByRole('button', { name: 'Salvar' }).click();

  await page.waitForLoadState('networkidle');

  const toast = page.getByText('Perfil atualizado com sucesso!');

  expect(toast).toBeVisible();

  await page.getByRole('button', { name: 'Close' }).click();

  await expect(page.getByRole('button', { name: 'Rocket Pizza' })).toBeVisible();
});
