<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'User 1',
            'password' => bcrypt('password1'),
            'email' => 'user1@webtech.id',
        ]);
        User::create([
            'name' => 'User 2',
            'password' => bcrypt('password2'),
            'email' => 'user2@webtech.id',
        ]);
        User::create([
            'name' => 'User 3',
            'password' => bcrypt('password3'),
            'email' => 'user3@wordskill.org',
        ]);
    }
}
