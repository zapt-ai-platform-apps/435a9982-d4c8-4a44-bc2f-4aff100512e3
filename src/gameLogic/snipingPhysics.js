export function calculateBulletDrop(distance, windSpeed) {
  // Simulate bullet drop based on distance and wind speed
  const gravityFactor = 9.81;
  const drop = (distance / 1000) * gravityFactor + windSpeed * 0.1;
  console.log(`Calculated bullet drop for distance ${distance} and wind speed ${windSpeed}: ${drop}`);
  return drop;
}