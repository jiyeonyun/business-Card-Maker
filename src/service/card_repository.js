import firebaseApp from './firebase';

class CardRepository{

    syncCards(userId,onUpadte){
        const ref = firebaseApp.database().ref(`${userId}/cards`);
        ref.on('value', snapshot =>{
            const value = snapshot.val();
            value && onUpadte(value);
        });
        return () => ref.off();
    }

    saveCard(userId,card){
        firebaseApp.database().ref(`${userId}/cards/${card.id}`).set(card);
    }
    removeCard(userId,card){
        firebaseApp.database().ref(`${userId}/cards/${card.id}`).remove();
    }
}

export default CardRepository;