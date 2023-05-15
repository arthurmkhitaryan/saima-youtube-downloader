import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

export const scheduledFunction = functions.region('europe-west3').pubsub
  .schedule('0 * * * *')
  .onRun(async (context) => {
    try {
      const db = admin.firestore();
      const now = admin.firestore.Timestamp.now();
      const ts = admin.firestore.Timestamp.fromMillis(now.toMillis() - 86400000); // 24 hours in milliseconds = 86400000
      // Example: Delete documents older than 24 hours
      const snapshot = await db.collection('links').where('createdAt', '<', ts).get();
      const deletePromises: Promise<any>[] = [];
      snapshot.forEach((doc) => {
        deletePromises.push(doc.ref.delete());
      });

      await Promise.all(deletePromises);

      console.log('Scheduled function executed successfully');
    } catch (error) {
      console.error('Error executing scheduled function:', error);
    }
  });