package com.zhiy.pojo;

public class School {
    private Integer schoolcol;

    private String school;

    private String jiu;

    private String er;

    private String shuang;

    public School(Integer schoolcol, String school, String jiu, String er, String shuang) {
        this.schoolcol = schoolcol;
        this.school = school;
        this.jiu = jiu;
        this.er = er;
        this.shuang = shuang;
    }

    public School() {
        super();
    }

    public Integer getSchoolcol() {
        return schoolcol;
    }

    public void setSchoolcol(Integer schoolcol) {
        this.schoolcol = schoolcol;
    }

    public String getSchool() {
        return school;
    }

    public void setSchool(String school) {
        this.school = school == null ? null : school.trim();
    }

    public String getJiu() {
        return jiu;
    }

    public void setJiu(String jiu) {
        this.jiu = jiu == null ? null : jiu.trim();
    }

    public String getEr() {
        return er;
    }

    public void setEr(String er) {
        this.er = er == null ? null : er.trim();
    }

    public String getShuang() {
        return shuang;
    }

    public void setShuang(String shuang) {
        this.shuang = shuang == null ? null : shuang.trim();
    }
}