class User {
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
    phoneNumber = '';
    bio = '';
    genderPreference = '';
    religion = '';
    ethnicity = '';

    constructor(firstName, lastName, age, gender, userRating, favoriteGenre, hatedGenres, favoriteArtist, hatedArtist, agePreference, trans, phoneNumber, bio, genderPreference, religion, ethnicity) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.userRating = userRating;
        this.favoriteGenre = favoriteGenre;
        this.hatedGenres = hatedGenres;
        this.favoriteArtist = favoriteArtist;
        this.hatedArtist = hatedArtist;
        this.agePreference = agePreference;
        this.trans = trans;
        this.phoneNumber = phoneNumber;
        this.bio = bio;
        this.genderPreference = genderPreference;
        this.religion = religion;
        this.ethnicity = ethnicity;
    }
}

export {User}