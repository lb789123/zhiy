package com.zhiy.controller.portal;

import com.github.pagehelper.PageInfo;
import com.zhiy.common.Const;
import com.zhiy.common.ServerResponse;
import com.zhiy.pojo.Gxxxb;
import com.zhiy.service.IGxxxbService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import com.zhiy.vo.ScjListVo;
import com.zhiy.service.IScjService;

import javax.servlet.http.HttpSession;

/**
 * Created by bu
 */
@Controller
@RequestMapping("/gxxxb/")
public class GxxxbController {
    @Autowired
    IGxxxbService iGxxxbService;

    /**
     * gao校信息查询
     * @param session
     * @return
     */
    @RequestMapping(value = "getSchool.do",method = RequestMethod.POST)
    @ResponseBody
    public ServerResponse<Gxxxb> selectbygxxm(String Gxxm, HttpSession session){
        ServerResponse<Gxxxb> response = iGxxxbService.selectgxtydm(Gxxm);
        if(response.isSuccess()){
            session.setAttribute(Const.FIND_GXXM,response.getData());
        }
        return response;
    }
//
//    @RequestMapping(value = "getgxxxb.do",method = RequestMethod.POST)
//    @ResponseBody
//    public ServerResponse<Gxxxb> getgxxx(String Gxdm){
//        return iGxxxbService.getGxxxbList(Gxdm);
//    }

    @RequestMapping("getSchoolList.do")
    @ResponseBody
    public ServerResponse<PageInfo> list(@RequestParam(value = "pageNum",defaultValue = "1") int pageNum, @RequestParam(value = "pageSize",defaultValue = "1000") int pageSize){
        pageSize=1000;
        return iGxxxbService.getGxxxbList(pageNum,pageSize);
    }
    @RequestMapping("getSchoolListclass.do")
    @ResponseBody
    public ServerResponse<PageInfo> listclass(@RequestParam(value = "pageNum",defaultValue = "1") int pageNum, @RequestParam(value = "pageSize",defaultValue = "100") int pageSize,String leibie){
        pageSize=1000;
        return iGxxxbService.getGxxxbListclass(pageNum,pageSize,leibie);
    }
    @RequestMapping("getSchoolzsd.do")
    @ResponseBody
    public ServerResponse<PageInfo> listzsd(@RequestParam(value = "pageNum",defaultValue = "1") int pageNum, @RequestParam(value = "pageSize",defaultValue = "100") int pageSize,String zsd){
        pageSize=1000;
        return iGxxxbService.getGxxxbListzsd(pageNum,pageSize,zsd);
    }
    @RequestMapping("getSchoolclass.do")
    @ResponseBody
    public ServerResponse<PageInfo> getSchoolclass(@RequestParam(value = "pageNum",defaultValue = "1") int pageNum, @RequestParam(value = "pageSize",defaultValue = "100") int pageSize,String ts){
        pageSize=1000;
        return iGxxxbService.getSchoolclass(pageNum,pageSize,ts);
    }
    @RequestMapping("getSchoolclassjiu.do")
    @ResponseBody
    public ServerResponse<PageInfo> getSchoolclassjiu(@RequestParam(value = "pageNum",defaultValue = "1") int pageNum, @RequestParam(value = "pageSize",defaultValue = "100") int pageSize){
        pageSize=1000;
        return iGxxxbService.getSchoolclassjiu(pageNum,pageSize);
    }
    @RequestMapping("getSchoolclasser.do")
    @ResponseBody
    public ServerResponse<PageInfo> getSchoolclasser(@RequestParam(value = "pageNum",defaultValue = "1") int pageNum, @RequestParam(value = "pageSize",defaultValue = "100") int pageSize){
        pageSize=1000;
        return iGxxxbService.getSchoolclasser(pageNum,pageSize);
    }
}
