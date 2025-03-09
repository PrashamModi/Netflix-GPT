export const alertWithTimer = (validationErrors, setAlerts) => {
  setTimeout(() => {
    setAlerts(validationErrors);
  }, 200);

  setTimeout(() => {
    setAlerts([]);
  }, 3000);
};

