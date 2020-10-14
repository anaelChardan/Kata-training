<?php

declare(strict_types=1);

namespace App;

class FizzBuzz {
    public function __invoke(int $entry): string
    {
        if ($entry % 3 === 0 && $entry % 5 === 0) {
            return "FizzBuzz";
        }

        if ($entry % 3 === 0) {
            return "Fizz";
        }

        if ($entry % 5 === 0) {
            return "Buzz";
        }

        return (string) $entry;
    }
}
