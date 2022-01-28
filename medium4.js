let Car = {
  make: "Toyota ",
  model: "SUVs",
  year: 2015,
  mileage: 2000,
  color: "blue",

  driveToWork: () => {
    Car.mileage += 33;
    console.log(` new mileage aftr driivng to work is: ${Car.mileage}.`);
  },
  driveAroundTheWorld: () => {
    Car.mileage += 24000;
    console.log(
      ` new mileage after driving around the world is: ${Car.mileage}.`
    );
  },
  runErrands: () => {
    Car.mileage += 30;
    console.log(`new mileage after running errands is: ${Car.mileage}.`);
  },
};

Car.driveToWork();
Car.driveAroundTheWorld();
Car.runErrands();
