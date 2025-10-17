
/*
 * Did you initialize a git repository for this app? If not, run:

        git init -b main
        git add Mutator.mjs README.md assets
        git commit -m "Initial revision"

 * For Github, the following might come in handy:

        git remote add origin git@github.com:<user>/<project>
        git push --set-upstream origin main

 */

/*
 * This is a Sobamail application.
 * See https://sobamail.com for more info
 */

import "soba://computer/R1";

import {
    DeleteRow,
} from "https://sobamail.com/module/base/v1?sha224=5MTCAIBRI336R84VHU2MK2ADBKA1MSNUSG1JUMBR1UKT8";

export default class Mutator {
    static id = "todolist.mburak.user.app.sobamail.com";
    static name = "todolist";
    static version = "1.0.0.0";
    static objects = new Map([
        [ DeleteRow.KEY, false ],
    ]);

    constructor() {
        // TODO: Create the database schema
        // TODO: Perform any sanity checks
    }

    process(message, metadata) {
        // TODO: Implement the app logic
    }
}
