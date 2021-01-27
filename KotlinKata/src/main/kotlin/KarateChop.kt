fun chop(number: Int, list: List<Int>, positionGiven: Int? = null): Int {
    if (list.isEmpty()) {
        return -1;
    }

    val position = positionGiven ?: list.size / 2
    val comparator = list[position]

    if (comparator == number) {
        return position;
    }

    if (comparator > number)
        return chop(number, list, position / 2)

    return chop(number, list, position + position / 2)
}