import React, { useState, useEffect } from 'react';
import { firestore } from '../../utils/firebase';
import { collection, doc, setDoc, addDoc } from 'firebase/firestore';
import { useNavigate, useLocation } from 'react-router-dom';
import NewJobSection from './NewJobSection'
import DescribeYourJobSection from './DescribeYourJobSection';
import ProjectConditionsSection from './ProjectConditionsSection';
import ExperienceSection from './ExperienceSection';
import AddAnImageSection from './AddAnImageSection';
import SubmitButton from './SubmitButton';

// Post Job page
function PostJob() {

    //========== Apply useStates to each field to respond to changes ========
    //New Job Section
    const [selectedJobType, setSelectedJobType] = useState('');

    //Describe Your Job Section
    const [titlePosition, setTitlePosition] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [skills, setSkills] = useState('');

    //ProjectConditionsSection
    const [projectLength, setProjectLength] = useState('');
    const [paymentMin, setPaymentMin] = useState('');
    const [paymentMax, setPaymentMax] = useState('');
    const [workingHours, setWorkingHours] = useState('');

    //ExperienceSection
    const [experienceIn, setExperienceIn] = useState('');
    const [forAtLeast, setForAtLeast] = useState('');

    //======= Apply useStates to enable/disable the "Post" button for Employment-typed jobs =======
    const [isPaymentCompleted, setIsPaymentCompleted] = useState(false);

    //========= Retrieve data from the PaymentForm.jsx, which would be the same data sent from PostJob.jsx (this component) to it =============
    const location = useLocation();
    const postJobDAtaFromPaymentForm = location.state?.postJobData;
    console.log(postJobDAtaFromPaymentForm);

    //Repopulate the input fields of PostJob.jsx
    useEffect(() => {
        if (postJobDAtaFromPaymentForm) {
            setSelectedJobType(postJobDAtaFromPaymentForm.selectedJobType);
            setTitlePosition(postJobDAtaFromPaymentForm.titlePosition);
            setJobDescription(postJobDAtaFromPaymentForm.jobDescription);
            setSkills(postJobDAtaFromPaymentForm.skills);
            setProjectLength(postJobDAtaFromPaymentForm.projectLength);
            setPaymentMin(postJobDAtaFromPaymentForm.paymentMin);
            setPaymentMax(postJobDAtaFromPaymentForm.paymentMax);
            setWorkingHours(postJobDAtaFromPaymentForm.workingHours);
            setExperienceIn(postJobDAtaFromPaymentForm.experienceIn);
            setForAtLeast(postJobDAtaFromPaymentForm.forAtLeast);
        }
    }, [postJobDAtaFromPaymentForm]);


    //============= Obtain the state of the payment for the Employment-typed job ===========

    //Retrieve the state of the payment, passed from PaymentForm.js
    const paymentSuccess = location.state?.paymentSuccess;

    useEffect(() => {
        if (postJobDAtaFromPaymentForm) {
            setSelectedJobType(postJobDAtaFromPaymentForm.selectedJobType);

            //Set isPaymentCompleted based on paymentSuccess
            if (paymentSuccess) {
                setIsPaymentCompleted(true);
                alert("Payment successful! The Job can now be posted");
            }
        }
    }, [postJobDAtaFromPaymentForm, paymentSuccess]);


    //==================== Handle changes to the fields ====================

    //--------------- Describe Your Job Section -----------------

    //Handle changes to the Title/Position field
    const handleTitlePositionChange = (value) => {
        setTitlePosition(value);
        console.log('Title/Position input: ' + value);
    }

    //Handle changes to the Experience/In field
    const handleJobDescriptionChange = (value) => {
        setJobDescription(value);
        console.log('Job Description input: ' + value);
    }

    //Handle changes to the Experience/In field
    const handleSkillsChange = (value) => {
        setSkills(value);
        console.log('Skills input: ' + value);
    }


    //--------------- Project Conditions Section -----------------

    //Handle changes to the Experience/In field
    const handleProjectLengthChange = (value) => {
        setProjectLength(value);
        console.log('Project Length value: ' + value);
    }

    //Handle changes to the Payment Min field
    const handlePaymentMinChange = (value) => {
        setPaymentMin(value);
        console.log('Payment Min value: ' + value);
    }

    //Handle changes to the Payment Min field
    const handlePaymentMaxChange = (value) => {
        setPaymentMax(value);
        console.log('Payment Max value: ' + value);
    }

    //Handle changes to the Experience/In field
    const handleWorkingHoursChange = (value) => {
        setWorkingHours(value);
        console.log('Working Hours value: ' + value);
    }


    //--------------- Experience Section -----------------

    //Handle changes to the Experience/In field
    const handleExperienceInChange = (value) => {
        setExperienceIn(value);
        console.log('Experience In input: ' + value);
    }

    //Handle changes to the For at Least field
    const handleForAtLeastChange = (value) => {
        setForAtLeast(value);
        console.log('For At Least input: ' + value);
    }

    //==================== Send data to the Firestore ====================
    const sendDataToFirestore = async () => {
        try {
            const dataCollection = collection(firestore, 'jobsData');

            // Create a specific document ID
            const documentId = Date.now().toString();  // set your desired ID here
            // const documentId = 'test';  // set your desired ID here

            // Create a reference to the document with the specific ID
            const docRef = doc(dataCollection, documentId);

            // Set the data at the specified location
            await setDoc(docRef, {
                selectedJobType: selectedJobType,
                titlePosition: titlePosition,
                jobDescription: jobDescription,
                skills: skills,
                projectLength: projectLength,
                paymentMin: paymentMin,
                paymentMax: paymentMax,
                workingHours: workingHours,
                experienceIn: experienceIn,
            });

            console.log('Data successfully written to Firestore with custom ID!');
        } catch (error) {
            console.error('Error writing document: ', error);
        }
    };


    //==================== Send data to PaymentPage.jsx and open it ====================
    let navigate = useNavigate();

    const payForPost = async () => {
        //Pass data to the PaymentPage.jsx
        try {
            let dataToPassToPaymentPage = {
                selectedJobType,
                titlePosition,
                jobDescription,
                skills,
                projectLength,
                paymentMin,
                paymentMax,
                workingHours,
                experienceIn,
                forAtLeast,
                isPaymentCompleted,
            };

            navigate('/paymentPage', { state: { data: dataToPassToPaymentPage } });
        } catch (error) {
            console.error('Error initialising payment gateway ', error);
        }
    };

    //==================== Render the component ====================
    return (

        <div>
            <NewJobSection
                selectedJobType={selectedJobType} //Check the appropriate Radio element based on data sent from PaymentForm.js
                setSelectedJobType={setSelectedJobType}
            />

            <DescribeYourJobSection
                titlePosition={titlePosition} //Initialise the input element with text based on data sent from PaymentForm.js
                onTitlePositionChange={handleTitlePositionChange}
                jobDescription={jobDescription} //Initialise the input element with text based on data sent from PaymentForm.js
                onJobDescriptionChange={handleJobDescriptionChange}
                skills={skills} //Initialise the input element with text based on data sent from PaymentForm.js
                onSkillsChange={handleSkillsChange}
            />

            <ProjectConditionsSection
                projectLength={projectLength}
                onProjectLengthChange={handleProjectLengthChange}
                paymentMin={paymentMin}
                onPaymentMinChange={handlePaymentMinChange}
                paymentMax={paymentMax}
                onPaymentMaxChange={handlePaymentMaxChange}
                workingHours={workingHours}
                onWorkingHoursChange={handleWorkingHoursChange}
            />

            {/* Only display "ExperienceSection" if and only if selectedJobType === 'Employment' */}
            {selectedJobType === 'Employment' &&
                <ExperienceSection
                    experienceIn={experienceIn}
                    onExperienceInChange={handleExperienceInChange}
                    forAtLeast={forAtLeast}
                    onForAtLeastChange={handleForAtLeastChange}
                />
            }

            <AddAnImageSection />

            {/* If the selected job type is "Employment", then show the "Pay" button */}
            {selectedJobType === 'Employment' &&
                <SubmitButton
                    text="Pay"
                    onSubmit={payForPost}

                    //Disable the "Pay" button if the payment has been completed
                    disabled={isPaymentCompleted}
                />
            }

            <SubmitButton
                text="Post"
                onSubmit={sendDataToFirestore}

                //Disable the "Post" butto if the selected job type is "Employment"
                //AND payment has NOT bene completed
                disabled={selectedJobType === 'Employment' && !isPaymentCompleted}
            />

        </div>
    );
}

export default PostJob