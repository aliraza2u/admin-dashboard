import React from 'react';
import { CampaignState } from '../../types.d';
import CampaignSetupForm from '../Forms/CampaignSetupForm';
import CampaignInitializeForm from '../Forms/CampaignInitializeForm';
import CampaignPostAnndTagsForm from '../Forms/CampaignPostAnndTagsForm';
import CampaignRequirementsForm from '../Forms/CampaignRequirementsForm';
import CampaignAlgorithmForm from '../Forms/CampaignAlgorithmForm';

interface Props {
  userData: any;
  campaign: CampaignState;
}

export interface ActionsProps {
  activeStep: number;
  firstStep: number;
  finalStep: number;
  handleNext: () => void;
  handleBack: () => void;
  handleSubmit?: (data: CampaignState) => void;
}

const StepContent: React.FC<Props & ActionsProps> = ({
  userData,
  activeStep,
  firstStep,
  finalStep,
  handleBack,
  handleNext,
  handleSubmit,
  campaign,
}) => {
  switch (activeStep) {
    case 0:
      return (
        <CampaignSetupForm
          company={userData.company}
          activeStep={activeStep}
          firstStep={firstStep}
          finalStep={finalStep}
          handleBack={handleBack}
          handleNext={handleNext}
        />
      );
    case 1:
      return (
        <CampaignInitializeForm
          activeStep={activeStep}
          firstStep={firstStep}
          finalStep={finalStep}
          handleBack={handleBack}
          handleNext={handleNext}
          campaignType={campaign.config.budgetType as string}
          userData={userData}
        />
      );
    case 2:
      return (
        <CampaignPostAnndTagsForm
          activeStep={activeStep}
          firstStep={firstStep}
          finalStep={finalStep}
          handleBack={handleBack}
          handleNext={handleNext}
        />
      );
    case 3:
      return (
        <CampaignRequirementsForm
          activeStep={activeStep}
          firstStep={0}
          finalStep={4}
          handleBack={handleBack}
          handleNext={handleNext}
        />
      );
    case 4:
      return (
        <CampaignAlgorithmForm
          activeStep={activeStep}
          firstStep={0}
          finalStep={4}
          handleBack={handleBack}
          handleNext={handleNext}
          handleSubmit={handleSubmit}
        />
      );
    default:
      return (
        <CampaignSetupForm
          company={userData.company}
          activeStep={activeStep}
          firstStep={0}
          finalStep={4}
          handleBack={handleBack}
          handleNext={handleNext}
        />
      );
  }
};

export default StepContent;
