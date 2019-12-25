package com.zhiy.controller.portal;
import com.github.pagehelper.PageInfo;
import com.zhiy.common.Const;
import com.zhiy.common.ServerResponse;
import com.zhiy.pojo.Zyb;
import com.zhiy.pojo.User;
import com.zhiy.service.IZybService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import javax.servlet.http.HttpSession;

/**
 * Created by bu
 */
@Controller
@RequestMapping("/zyb/")
public class ZybController {

    @Autowired
    IZybService iZybService;

    @RequestMapping(value = "getzybList.do",method = RequestMethod.POST)
    @ResponseBody
    public ServerResponse<PageInfo> getshoucanglist(String username){
        return iZybService.zyb(1,100,username);
    }

    @RequestMapping(value = "shoucangzy.do",method = RequestMethod.POST)
    @ResponseBody
    public ServerResponse<String> shoucangzy(String username, String gxmc,String zymc, String kb, String pc){

        return iZybService.shoucangzy(username,gxmc,zymc,kb,pc);
    }
    @RequestMapping(value = "deletezy.do",method = RequestMethod.POST)
    @ResponseBody
    public ServerResponse<String> deletezy(String username, String gxmc,String zymc, String kb, String pc){

        return iZybService.deletezy(username,gxmc,zymc,kb,pc);
    }
}
