import React from 'react'
import shareModalStyles from './ShareModal.module.css'
import { setShareLink, toggleDemoModal } from '../../redux/slices/visitorDetailsModalSlice'
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { LinkedinIcon, WhatsappIcon, WhatsappShareButton } from 'react-share';
import { MdContentCopy } from "react-icons/md";
import { message } from 'antd';
import { linkSharingHashes } from '../../data/linkSharingHashes';
const ShareModal = () => {
   const [messageApi, contextHolder] = message.useMessage();
   const dispatch=useDispatch();
    const success = () => {
      messageApi.open({
        type: 'success',
        content: 'Url copied to your clipboard',
      });
    };
     const contentStyle = {
        height: '100%',
        color: '#fff',
        lineHeight: '100%',
        textAlign: 'center',
        background: '#364d79',
      };
      const {shareLink,shareName,shareId}=useSelector(state=>state.visitorDetailsModal)
      const url = `${window.location.origin}${shareName ? `/#${shareName}` : ""}`;
    const linkedInMessageUrl = `https://www.linkedin.com/messaging/compose?body=${encodeURIComponent(shareName + " " + url)}`;
    const handleShare = () => {
      navigator.clipboard.writeText(url).then(() => {
        success()
      });
    };
  return (
    <div className={shareModalStyles.main}>
      {contextHolder}
       <div className={shareModalStyles.inner_container} >
        <h3>Share link via</h3>
        <div className={shareModalStyles.share_options}>
          <RxCross2 className={shareModalStyles.collapse_modal_icon} onClick={()=>dispatch(setShareLink({shareName:null}))}/>
          <a 
              href={`https://wa.me/?text=${encodeURIComponent(`${shareName} - ${url}`)}`} 
              target="_blank"
            >
              <WhatsappIcon size={48} round />
            <p className={shareModalStyles.linkNames} style={{color:'black'}}>Whatsapp</p>
            </a>
          <a href={linkedInMessageUrl} target="_blank" rel="noopener noreferrer">
            <LinkedinIcon size={48} round />
            <p className={shareModalStyles.linkNames} style={{color:'black'}}>Linkedin</p>
          </a>
          <div>
            <MdContentCopy className={shareModalStyles.icons} onClick={()=>handleShare()}/>
            <p className={shareModalStyles.linkNames} style={{color:'black'}}>Copy Link</p>
          </div>
        </div>
        </div>
    </div>
  )
}

export default ShareModal