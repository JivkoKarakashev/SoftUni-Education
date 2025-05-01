function toStringExtension() {

    class Person {

        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`;
        }
    }


    class Teacher extends Person {

        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString() {
            const personPartArr = super.toString().split(')')[0];
            const teacherPartArr = `, subject: ${this.subject})`;
            return personPartArr.concat(teacherPartArr);
        }
    }

    class Student extends Person {

        constructor(name, email, course) {
            super(name, email)
            this.course = course;
        }

        toString() {
            const personPartArr = super.toString().split(')')[0];
            const studentPartArr = `, course: ${this.course})`;
            return personPartArr.concat(studentPartArr);
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}