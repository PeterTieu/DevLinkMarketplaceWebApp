import { getDocs, collection } from 'firebase/firestore';
import { db, storage } from '../../utils/firebase';
import { ref, getDownloadURL, listAll } from 'firebase/storage'; // Corrected import here

//==================== Fetch data from the Firestore ====================
export async function fetchJobs() {
    const jobListSnapshot = await getDocs(collection(db, "jobsData"));
    const jobsArray = [];

    // Reference to the images directory in Firebase Storage
    const imagesDirectoryRef = ref(storage, 'images'); // Ensure you've defined 'storage' properly.

    // List all files in the 'images' directory
    const imageFiles = await listAll(imagesDirectoryRef);

    for (let i = 0; i < jobListSnapshot.docs.length; i++) {
        const doc = jobListSnapshot.docs[i];
        const {
            titlePosition,
            jobDescription,
            skills,
            selectedJobType,
            projectLength,
            paymentMin,
            paymentMax,
            workingHours,
            experienceIn,
            forAtLeast
        } = doc.data();

        // Fetch download URL for each image reference
        const imageUrl = await getDownloadURL(imageFiles.items[i]);

        jobsArray.push({
            titlePosition,
            jobDescription,
            skills,
            selectedJobType,
            projectLength,
            paymentMin,
            paymentMax,
            workingHours,
            experienceIn,
            forAtLeast,
            imageUrl
        });
    }

    return jobsArray;
}