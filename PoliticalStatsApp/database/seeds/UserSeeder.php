<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = ['name' => 'frank', 'email'=>'sanflip77@gmail.com','password' => bcrypt('password123') ];

        DB::table('users')->insert($user);
    }
}
