import { EColor, ZIndex, Size } from "@defines/css"
import { Icon } from '@components/common/icon/iconForm';
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { ReactNode } from 'react'

interface ModalProps {
  title: string,
  description?: string,
  children?: ReactNode | ReactNode[],
  background?: EColor,
  titleFontSize?: Size,
  descriptionFontSize?: Size,
}

export function Modal(props: ModalProps) {
  const {
    title,
    children = "",
    description = "",
    background = EColor.WHITE,
    titleFontSize = "32px",
    descriptionFontSize = "16px"
  } = props;
  return (
    <>
      <div className="modal-wrap">
        <div className="modal-head">
          <span>{title}</span>
          <Icon
            icon={faClose}
            width="40px"
            height="auto"
          />
        </div>
        <div className="modal-body">
          <span>{description}</span>
          { (description && children) && <hr className="modal-body-divider"/> }
          {children}
        </div>
      </div>
      <style jsx>
        {`
          .modal-wrap {
            z-index: ${ZIndex.MODAL};
            background: ${background};
            border: 1px solid ${EColor.BLACK};
            border-radius: 4px;
          }

          .modal-head {
            border-bottom: 1px solid ${EColor.BLACK};
            padding: 3px 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .modal-head span {
            font-size: ${titleFontSize};
          }

          .modal-body {
            padding: 60px 10px;
          }

          .modal-body span {
            font-size: ${descriptionFontSize};
          }

          .modal-body-divider {
            margin-top: 60px;
            margin-bottom: 60px;
          }
        `}
      </style>
    </>
  )
}