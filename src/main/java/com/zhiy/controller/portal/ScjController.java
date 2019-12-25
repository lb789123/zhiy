package com.zhiy.controller.portal;
import com.github.pagehelper.PageInfo;
import com.zhiy.common.Const;
import com.zhiy.common.ServerResponse;
import com.zhiy.pojo.Scj;
import com.zhiy.pojo.User;
import com.zhiy.pojo.Gxxxb;
import com.zhiy.service.IScjService;
import com.zhiy.service.IGxxxbService;
import com.zhiy.vo.ScjListVo;
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
@RequestMapping("/scj/")
public class ScjController {
    @Autowired
    IScjService iScjService;
    @Autowired
    IScjService iScjxxService;
    @RequestMapping(value = "getscjList.do",method = RequestMethod.POST)
    @ResponseBody
    public ServerResponse<PageInfo> getshoucanglist(String username){
        return iScjService.getshoucanglist(1,100,username);
    }
    @RequestMapping(value = "getscjListxx.do",method = RequestMethod.POST)
    @ResponseBody
    public ServerResponse<PageInfo> getshoucanglxxist(String username){
        return iScjxxService.getshoucangxxlist(1,100,username);
    }
    @RequestMapping(value = "shoucangzy.do",method = RequestMethod.POST)
    @ResponseBody
    public ServerResponse<String> shoucangzy(Scj scj){

        return iScjService.shoucangzy(scj);
    }
    @RequestMapping(value = "shoucangxx.do",method = RequestMethod.POST)
    @ResponseBody
    public ServerResponse<String> shoucangxx(String username, String gxmc,String kb, String pc){

        return iScjxxService.shoucangxx(username,gxmc,kb,pc);
    }
    @RequestMapping(value = "cherckxx.do",method = RequestMethod.POST)
    @ResponseBody
    public ServerResponse<String> cherckxx(String username, String gxmc){

        return iScjxxService.cherckxx(username,gxmc);
    }
    @RequestMapping(value = "deletezy.do",method = RequestMethod.POST)
    @ResponseBody
    public ServerResponse<String> deletezy(String username, String gxmc,String zymc, String kb, String pc){

        return iScjService.deletezy(username,gxmc,zymc,kb,pc);
    }

    @RequestMapping(value ="getshoucang.do", method = RequestMethod.POST)
    @ResponseBody
    public ServerResponse<PageInfo> shoucangschoollist(@RequestParam(value = "pageNum",defaultValue = "1") int pageNum, @RequestParam(value = "pageSize",defaultValue = "100") int pageSize,String username){
//        pageSize=1000;
        return iScjService.getscjbiaozhu(1,100,username);
    }
}
