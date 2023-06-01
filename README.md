# BCR API

Di dalam repository ini terdapat implementasi API dari Binar Car Rental.
Tugas kalian disini adalah:
1. Fork repository
2. Tulis unit test di dalam repository ini menggunakan `jest`.
3. Coverage minimal 70%

Good luck!

# LINK DEPLOYMENT
ch7fsw-1maulana-hassan-sechuti-production.up.railway.app

# TEST RESULT
------------------------------|---------|----------|---------|---------|-------------------------------
File                          | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
------------------------------|---------|----------|---------|---------|-------------------------------
All files                     |   95.93 |    87.34 |     100 |   95.93 | 
 app                          |     100 |      100 |     100 |     100 | 
  index.js                    |     100 |      100 |     100 |     100 | 
  router.js                   |     100 |      100 |     100 |     100 |                               
 app/controllers              |   92.32 |       84 |     100 |   92.32 | 
  ApplicationController.js    |     100 |      100 |     100 |     100 | 
  AuthenticationController.js |   93.06 |    85.18 |     100 |   93.06 | 87-88,123-124,131-134,139-142
  CarController.js            |   89.13 |    76.47 |     100 |   89.13 | 58-64,131-137,166-171         
  index.js                    |     100 |      100 |     100 |     100 | 
 app/errors                   |     100 |      100 |     100 |     100 | 
  ApplicationError.js         |     100 |      100 |     100 |     100 | 
  CarAlreadyRentedError.js    |     100 |      100 |     100 |     100 | 
  EmailAlreadyTakenError.js   |     100 |      100 |     100 |     100 | 
  EmailNotRegisteredError.js  |     100 |      100 |     100 |     100 | 
  InsufficientAccessError.js  |     100 |      100 |     100 |     100 |                               
  NotFoundError.js            |     100 |      100 |     100 |     100 | 
  WrongPasswordError.js       |     100 |      100 |     100 |     100 | 
  index.js                    |     100 |      100 |     100 |     100 | 
 app/models                   |   99.43 |    86.66 |     100 |   99.43 | 
  car.js                      |     100 |      100 |     100 |     100 | 
  index.js                    |   97.29 |    66.66 |     100 |   97.29 | 13
  role.js                     |     100 |      100 |     100 |     100 | 
  user.js                     |     100 |      100 |     100 |     100 |                               
  usercar.js                  |     100 |      100 |     100 |     100 | 
 config                       |     100 |      100 |     100 |     100 | 
  application.js              |     100 |      100 |     100 |     100 | 
  database.js                 |     100 |      100 |     100 |     100 | 
------------------------------|---------|----------|---------|---------|-------------------------------

Test Suites: 12 passed, 12 total
Tests:       21 passed, 21 total
Snapshots:   0 total
Time:        127.16 s

Ran all test suites.