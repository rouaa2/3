let selectedPiece = null;

    function movePiece(squareId) {
        const square = document.getElementById(squareId);
        
        if (!selectedPiece) {
            if (square.textContent.trim() === '') {
                return; // No piece to select
            }
            
            selectedPiece = square;
            square.style.backgroundColor = 'lightgreen'; // Highlight selected piece
        } else {
            if (square === selectedPiece) {
                selectedPiece.style.backgroundColor = ''; // Deselect piece
                selectedPiece = null;
                return;
            }
            
            square.textContent = selectedPiece.textContent;
            selectedPiece.textContent = '';
            selectedPiece.style.backgroundColor = ''; // Deselect piece
            selectedPiece = null;
        }
    }