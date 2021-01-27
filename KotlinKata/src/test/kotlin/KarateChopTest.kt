import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.ints.shouldBeExactly

class KarateChopTest: FunSpec({
    test("It should return -1 for an empty list") {
        chop(1, emptyList()) shouldBeExactly -1
    }

    test("It should return the -1 if it is not found") {
//        chop(3, listOf(1)) shouldBeExactly -1
//        chop(1, listOf(1)) shouldBeExactly 0
//        chop(1, listOf(1, 3, 5)) shouldBeExactly 0
//        chop(3, listOf(1, 3, 5)) shouldBeExactly 1
        chop(5, listOf(1, 3, 5)) shouldBeExactly 2
    }
})