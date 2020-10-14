<?php 

namespace App\Tests;

use App\FizzBuzz;
use Codeception\Test\Unit;

class FizzBuzzTest extends Unit
{
    public function test_it_returns_the_number()
    {
        self::assertEquals("1",(new FizzBuzz())(1));
    }

    public function test_it_returns_fizz_if_it_is_divisible_by_3()
    {
        self::assertEquals("Fizz",(new FizzBuzz())(3));
    }

    public function test_it_returns_buzz_if_it_is_divisible_by_5()
    {
        self::assertEquals("Buzz",(new FizzBuzz())(5));
    }

    public function test_it_returns_fizz_buzz_if_it_is_divisible_by_3_and_by_5()
    {
        self::assertEquals("FizzBuzz",(new FizzBuzz())(15));
    }
}
