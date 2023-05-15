import { DocumentData, Timestamp, addDoc, collection, doc, getDoc, getFirestore } from 'firebase/firestore';
import { app } from './firebase';

const firestore = getFirestore(app);

interface ILink {
    initialLink: string;
    createdAt: Timestamp;
}


// Links Collection
export const linksCollection = collection(firestore, 'links');

// Get Link By ID

export const getLinkById = async (id: string): Promise<DocumentData & ILink> => {
    try {
        const linkRef = doc(firestore, 'links', id);
        const linkSnapshot = await getDoc(linkRef);

        if (linkSnapshot.exists()) {
            return linkSnapshot.data() as DocumentData & ILink;
        }

        throw new Error('Link not found');
    } catch (error) {
        throw new Error(`Error retrieving link by ID: ${error}`);
    }
};

// Add Link
export const addLink = async (linkData: { initialLink: string }) => {
    try {
        const newLink = await addDoc(linksCollection, {
            ...linkData,
            createdAt: Timestamp.fromDate(new Date())
        });

        return newLink.id;
    } catch (error) {
        return error
    }
}

