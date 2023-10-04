import { faker } from '@faker-js/faker';

// List of customers and their information for the Home Page
const customerList = [
    {
        "key": 0,
        "image": faker.image.urlPicsumPhotos({ width: 220, height: 220 }),
        "name": faker.person.fullName(),
        "jobTitle": faker.person.jobTitle(),
        "description": faker.person.bio(),
        "extra": faker.number.int({ min: 1, max: 5 }),
    },
    {
        "key": 1,
        "image": faker.image.urlPicsumPhotos({ width: 220, height: 220 }),
        "name": faker.person.fullName(),
        "jobTitle": faker.person.jobTitle(),
        "description": faker.person.bio(),
        "extra": faker.number.int({ min: 1, max: 5 }),
    },
    {
        "key": 2,
        "image": faker.image.urlPicsumPhotos({ width: 220, height: 220 }),
        "name": faker.person.fullName(),
        "jobTitle": faker.person.jobTitle(),
        "description": faker.person.bio(),
        "extra": faker.number.int({ min: 1, max: 5 }),
    },
    {
        "key": 3,
        "image": faker.image.urlPicsumPhotos({ width: 220, height: 220 }),
        "name": faker.person.fullName(),
        "jobTitle": faker.person.jobTitle(),
        "description": faker.person.bio(),
        "extra": faker.number.int({ min: 1, max: 5 }),
    },
    {
        "key": 4,
        "image": faker.image.urlPicsumPhotos({ width: 220, height: 220 }),
        "name": faker.person.fullName(),
        "jobTitle": faker.person.jobTitle(),
        "description": faker.person.bio(),
        "extra": faker.number.int({ min: 1, max: 5 }),
    },
    {
        "key": 5,
        "image": faker.image.urlPicsumPhotos({ width: 220, height: 220 }),
        "name": faker.person.fullName(),
        "jobTitle": faker.person.jobTitle(),
        "description": faker.person.bio(),
        "extra": faker.number.int({ min: 1, max: 5 }),
    },
    {
        "key": 6,
        "image": faker.image.urlPicsumPhotos({ width: 220, height: 220 }),
        "name": faker.person.fullName(),
        "jobTitle": faker.person.jobTitle(),
        "description": faker.person.bio(),
        "extra": faker.number.int({ min: 1, max: 5 }),
    },
    {
        "key": 7,
        "image": faker.image.urlPicsumPhotos({ width: 220, height: 220 }),
        "name": faker.person.fullName(),
        "jobTitle": faker.person.jobTitle(),
        "description": faker.person.bio(),
        "extra": faker.number.int({ min: 1, max: 5 }),
    },
    {
        "key": 8,
        "image": faker.image.urlPicsumPhotos({ width: 220, height: 220 }),
        "name": faker.person.fullName(),
        "jobTitle": faker.person.jobTitle(),
        "description": faker.person.bio(),
        "extra": faker.number.int({ min: 1, max: 5 }),
    },
]

export default customerList