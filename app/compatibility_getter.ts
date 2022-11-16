enum Goodness {
    Best,
    Good,
    Mixed,
    Bad,
}

const Get = (a:string,b:string) => {
    if (a == "INTP" && b == "INTP") {
        return Goodness.Best;
    }
    if (a == "INTP" && b == "INTJ") {
        return Goodness.Bad;
    }
    // Add rest of the cases
    return Goodness.Bad;
}

export {Goodness, Get};