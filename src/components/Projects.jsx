import ProjectProfileCollection from '../ui-components/ProjectProfileCollection';
import IrrigationSystemDesignService from '../services/irrigation_system_design_backend'
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import PageView from '../domain/enum/PageView';

const irrigationSystemDesignService = new IrrigationSystemDesignService();

function Projects({ user, setPageView }) {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(irrigationSystemDesignService.getProjects());
    }, [projects])

    return (
        <div>
            <ProjectProfileCollection
                items={projects}
                overrideItems={({ item, index }) => ({
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
            <br />
            <Button
                onClick={() => {
                    alert("create a New Project");
                    setPageView(PageView.CREATE_NEW_PROJECT);
                }}
            >
                Create a New Project
            </Button>

        </div>
    )
}

export default Projects;