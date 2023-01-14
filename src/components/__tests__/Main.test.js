// Test List:
// snapshot
// handleCardClick()
    // click card and test if handleCardClick() has been called once
// resetCard()
    // click card and test state of each card hasBeenClicked = false
// shuffleCard()
    // click card
        // Test :
            // Same num of cards in deck
            // prevState of Cards is different from currentState of Cards
// replaceCardByName() *Name should maybe be changed*
    // click card
        // Test :
            // If Card state property hasBeenClicked = true;
// increaseScore()
    // click card 
        // Test :
            // If current score increases
            // If best score increases
// resetCurrentScore()
    // click card (twice):
        // Test : 
            // IF current score is reset to zero if card has already been clicked before