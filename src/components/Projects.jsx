import ProjectProfileCollection from '../ui-components/ProjectProfileCollection';
import IrrigationSystemDesignService from '../services/irrigation_system_design_backend'

const irrigationSystemDesignService = new IrrigationSystemDesignService();

function Projects({user}) {


    const items = irrigationSystemDesignService.getProjects();
    console.log(items)
    return (

      <ProjectProfileCollection
        items={items}
        overrideItems={({item, index})=> ({
            overrides: {
                ProjectName: {
                    children: item.name
                },
                UpdateBadge: {
                    style: {
                        cursor: "pointer"
                    },
                    onClick: () => alert(`update Badge ${item.id}`)
                },
                DeleteBadge: {
                    style: {
                        cursor: "pointer"
                    },
                    onClick: () => alert(`delete Badge ${item.id}`)
                }
            }
        })} 
      />
    )
}

export default Projects;