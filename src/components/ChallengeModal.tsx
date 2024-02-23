import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import SpriteAnimator from "./SpriteAnimator";

const ChallengeModal = (): JSX.Element => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen}>Open Modal</Button>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-xl">
                Congratulations!
              </ModalHeader>
              <ModalBody>
                <p>
                  Well done, you have completed all the challenges for this
                  topic!
                </p>

                <SpriteAnimator
                  spriteWidth={256}
                  spriteHeight={256}
                  borderWidth={0}
                  spacingWidth={0}
                  animationCycle={[
                    { x: 0, y: 0 },
                    { x: 256, y: 0 },
                    { x: 512, y: 0 },
                  ]}
                  animationSpeed={200}
                  imageSrc="/trophy.png"
                />
              </ModalBody>
              <ModalFooter className="flex justify-between">
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="success" onPress={onClose}>
                  Back to topics
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ChallengeModal;
