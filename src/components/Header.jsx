

import { IrrigationSystemDesignHeader } from '../ui-components';


function Header({setShowEtoComponent, user, signOut}) {

    const irrigationSystemDesignHeaderOverrides = {
        Evapotranspiration: {       
            style: {
                cursor: "pointer"
            },
            onClick: () => {
                setShowEtoComponent(true);
            }
        },
        UserData: {
            overrides: {
                image: {
                    src: user?.attributes?.profile
                }
            }
        },
        SignOutButton: {
            onClick: signOut
        }
    }


    return (
        <IrrigationSystemDesignHeader
            overrides={irrigationSystemDesignHeaderOverrides}
        />
    );
}

export default Header;