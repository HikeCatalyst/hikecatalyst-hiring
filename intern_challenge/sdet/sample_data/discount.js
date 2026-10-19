// Pricing: percent discount by tier, coupon, then tax. Contains deliberate bugs.
function finalPrice(price, tier, coupon, taxRate = 0.18) {
  let d = 0;
  if (tier === 'silver') d = 0.05;
  if (tier === 'gold') d = 0.1;
  if (tier === 'platinum') d = 0.2;
  let p = price - price * d;
  if (coupon === 'SAVE100') p = p - 100;
  if (coupon === 'HALF') p = p * 0.5;
  p = p + p * taxRate;
  return Math.round(p * 100) / 100;
}
module.exports = { finalPrice };
