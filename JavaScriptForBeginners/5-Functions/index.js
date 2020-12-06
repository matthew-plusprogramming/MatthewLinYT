// The take data, do something with it, and sometimes give back someting else

function introduction(name, age, favoriteColor) {
  console.log('Hello my name is ' + name);
  console.log('I am ' + age + ' years old');
  console.log('My favorite color is ' + favoriteColor);
}

function checkAge(age) {
  if (age > 17) {
    console.log('You are an adult');
  } else if (age > 12) {
    console.log('You are a teen');
  } else {
    console.log('You are a child');
  }

  introduction('Matthew', 16, 'Blue');
}

function morningRoutine() {
  brushTeeth();
  eatBreakfast();
  drinkWater();
}

checkAge(19);
checkAge(16);
