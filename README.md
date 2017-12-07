make sure you have:
angular cli (what you need to do ng commands)
composer
npm
sqlite3

cd AngularPart
npm install
cd into PolitcalStatsApp
Composer install

in PolitcalStatsApp:
create database/database.sqlite
create an .env file (i'll send you the .env)
run 'php artisan migrate'
run 'php artisan db:seed'

To start the app:
do 'php artisan serve' in PolitcalStatsApp
do 'ng serve --open' in AngularPart