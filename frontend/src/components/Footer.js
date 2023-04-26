import React, { useState, useEffect } from 'react';
import {BottomNavigation, BottomNavigationAction } from '@mui/material';

// Import des composants correspondants aux différentes pages
import CoursActions from '../views/CoursActions';
import ActionsPerso from '../views/ActionsPerso';
import Parametres from '../views/Parametres';

function Footer () {

    // etat du composant a envoyer
    const [content, setContent] = useState('');

    // etat de l'onglet actif
    const [value, setValue] = useState(0);

    // etat du loader
    const [isLoading, setIsLoading] = useState(false);

    // etat erreur
    const [error, setError] = useState('');

    useEffect(() => {
        loadViews('/cours-actions');
    }, []);

    const loadViews = async (url) => {
        try
        {
            // on affiche le loader
            setIsLoading(true);

            // on recupere le contenu
            switch (url) {
                case '/cours-actions':
                    setContent(<CoursActions />);
                    break;
                case '/actions-perso':
                    setContent(<ActionsPerso />);
                    break;
                case '/parametres':
                    setContent(<Parametres />);
                    break;
                default:
                    console.error(`URL inconnue : ${url}`);
                    break;
            }

            // on set une erreur pour signaler qu'on a rien recu ou que les url ne sont pas bon
            setError('');
        }
        catch (error)
        {
            console.error(error);
            setError('Une erreur s\'est produite. Veuillez réessayer plus tard.');
        }
        finally
        {
            setIsLoading(false);
        }
    };

    return (
        <div>
            {
                isLoading ? ( <p>Chargement...</p> ) :
                (
                    <main>
                        {
                            error ? ( <p>{error}</p> ) : 
                            (
                                content
                            )
                        }
                    </main>
                )
            }

            <footer>
                <nav>
                    <BottomNavigation
                        showLabels
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                            switch (newValue) {
                                case 0:
                                    loadViews('/cours-actions');
                                    break;
                                case 1:
                                    loadViews('/actions-perso');
                                    break;
                                case 2:
                                    loadViews('/parametres');
                                    break;
                                default:
                                    break;
                            }
                        }}
                    >
                        <BottomNavigationAction label="Cours Actions" />
                        <BottomNavigationAction label="Mes Actions" />
                        <BottomNavigationAction label="Paramètres" />
                    </BottomNavigation>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;