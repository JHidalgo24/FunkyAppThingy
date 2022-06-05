class UserItem {
    firstName = '';
    lastName = '';
    age = '';
    gender = '';
    userRating = '';
    favoriteGenre = '';
    hatedGenres = '';
    favoriteArtist = '';
    hatedArtist = '';
    agePreference = '';
    trans = '';
    displayTrans = '';
    phoneNumber = '';
    email = '';
    bio = '';
    genderPreference = '';
    religion = '';
    ethnicity = '';
    password = '';

    constructor(firstName, lastName, email, password, age, gender, userRating, favoriteGenre, hatedGenres, favoriteArtist, hatedArtist, agePreference, trans, displayTrans, phoneNumber, bio, genderPreference, religion, ethnicity) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.gender = gender;
        this.password = password
        this.userRating = userRating;
        this.favoriteGenre = favoriteGenre;
        this.hatedGenres = hatedGenres;
        this.favoriteArtist = favoriteArtist;
        this.hatedArtist = hatedArtist;
        this.agePreference = agePreference;
        this.trans = trans;
        this.displayTrans = displayTrans;
        this.phoneNumber = phoneNumber;
        this.bio = bio;
        this.genderPreference = genderPreference;
        this.religion = religion;
        this.ethnicity = ethnicity;
    }
}

export {UserItem}
